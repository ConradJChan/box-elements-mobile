import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import API from "box-ui-elements/es/api/APIFactory";
import { SIDEBAR_FIELDS_TO_FETCH } from "box-ui-elements/es/utils/fields";
import Main from "./Main";

async function fetchData(fileId, token, { enableAppActivity } = {}) {
  const api = new API({
    clientName: "MobileElements",
    token
  });

  const fetchFeedData = file => {
    return new Promise((resolve, reject) => {
      api
        .getFeedAPI(false)
        .feedItems(file, true, resolve, reject, () => {}, true, !!enableAppActivity);
    });
  };

  const fetchFile = id => {
    return new Promise((resolve, reject) => {
      api.getFileAPI().getFile(id, resolve, reject, {
        fields: SIDEBAR_FIELDS_TO_FETCH
      });
    });
  };

  const fetchUser = fileId => {
    return new Promise((resolve, reject) => {
      api.getUsersAPI(false).getUser(fileId, resolve, reject);
    });
  };

  const file = await fetchFile(fileId);
  const [user, feedItems] = await Promise.all([
    fetchUser(fileId),
    fetchFeedData(file)
  ]);
  console.log(feedItems);

  const features = {
    activityFeed: {
      tasks: {
        createFromComment: true,
        createButton: true,
        feedbackUrl: "http://example.org/",
        newApi: true,
        newCards: true
      },
      appActivity: {
        enabled: !!enableAppActivity
      }
    }
  };

  render(
    <Main items={feedItems} features={features} user={user} />,
    document.querySelector(".container")
  );
}

window.fetchData = fetchData;
