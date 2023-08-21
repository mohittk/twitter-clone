const base = "http://localhost:5000";

export const add_tweet = async(obj) => {
    const res = await fetch(`${base}/api/tweet/add-tweet`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type" : "application/json",
        },
    });
    const ans = await res.json();
    return ans;
}
export const edit_tweet = async(obj) => {
    const res = await fetch(`${base}/api/tweet/edit-tweet`, {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type" : "application/json",
        },
    });
    const ans = await res.json();
    return ans;
}
export const delete_tweet = async(obj) => {
    const res = await fetch(`${base}/api/tweet/delete-tweet`, {
        method: 'DELETE',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type" : "application/json",
        },
    });
    const ans = await res.json();
    return ans;
}
export const timeline = async(obj) => {
    const res = await fetch(`${base}/api/tweet/timeline`, {
        method: 'GET',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type" : "application/json",
        },
    });
    const ans = await res.json();
    return ans;
}
export const follow_user = async(obj) => {
    const res = await fetch(`${base}/api/tweet/follow/:userId`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type" : "application/json",
        },
    });
    const ans = await res.json();
    return ans;
}

export const unfollow_user = async(obj) => {
    const res = await fetch(`${base}/api/tweet/unfollow/:userId`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type" : "application/json",
        },
    });
    const ans = await res.json();
    return ans;
}
