export async function PostRequest(email, comment) {
  const BASE_URL = 'https://portfolio-js.b.goit.study/api';
  const END_POINT = '/requests';
  const url = BASE_URL + END_POINT;

  const options = {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      comment: comment,
    }),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  return await fetch(url, options).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.status);
    }
    return resp.json();
  });
}
