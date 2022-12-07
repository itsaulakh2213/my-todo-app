export const config2 = async (api, type) => {
 const res = await fetch(api, {
      method: type,
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      },
    });
    return await res.json();
  };

export const config = async (api, type, body) => {
    const res = await fetch(api, {
      method: type,
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token"),
      },
      body: JSON.stringify(body),
    });
    return await res.json();
  };
