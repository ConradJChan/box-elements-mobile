import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import API from "box-ui-elements/es/api/APIFactory";
import { SIDEBAR_FIELDS_TO_FETCH } from "box-ui-elements/es/utils/fields";
import Main from "./Main";

const api = new API({
    clientName: "MobileElements"
});

async function fetchData(fileId, token, { enableAppActivity } = {}) {
    api.options.token = token;

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

    const fetchFeedData = (file, successCallback) => {
        return new Promise((resolve, reject) => {
            api
            .getFeedAPI(false)
            .feedItems(file, true, (items) => {
                resolve(items);
                if (successCallback) {
                    successCallback(items);
                }
            }, reject, () => {}, true, !!enableAppActivity);
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

    const createComment = async (text, hasMention) => {
        if (!user) {
            throw Error('No user!');
        }

        api.getFeedAPI(false).createComment(
            file,
            user,
            text,
            hasMention,
            (comment) => {
                console.log(`created comment ${comment}`);
            },
            console.log,
        );

        // need to load the pending item
        fetchFeedData(file, (items) => {
            feedItems = items;
            renderComponent();
        });
    };

    const file = await fetchFile(fileId);
    let [user, feedItems] = await Promise.all([
        fetchUser(fileId),
        fetchFeedData(file)
    ]);

    const renderComponent = () => {
        render(
            <Main file={file} items={feedItems} features={features} user={user} onCommentCreate={createComment} />,
            document.querySelector(".container")
        );
    }

    renderComponent();
}

render(
    <Main />,
    document.querySelector(".container")
);

window.fetchData = fetchData;
