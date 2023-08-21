const base = "http://localhost:5000";

export const register_user = async(obj) => {
    const res = await fetch(`${base}/api/user/register`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type" : "application/json",
        },
    });
    const ans = await res.json();
    return ans;
}

export const login_user = async(obj) => {
    const res = await fetch(`${base}/api/user/login`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type" : "application/json",
        },
    });
    const ans = await res.json();
    return ans;
}