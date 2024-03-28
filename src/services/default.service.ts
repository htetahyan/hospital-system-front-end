
export const BASE_URL=process.env.NEXT_PUBLIC_API_URL!


// Generic fetcher function for handling errors
const fetcher = async <T>(url: string, options: RequestInit): Promise<T> => {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res=await response.json()
    return res.data;
};

// GET request
export const get = async <T>(path: string,tags?:any, params?: any): Promise<T> => {
    const url = `${BASE_URL}/${path}`;
    return fetcher<T>(url, { method: 'GET' ,next:{tags:[tags || 'default']}});
};
export const postToRouteHandler=async <T>( options: RequestInit): Promise<T> => {
    const response = await fetch(`/api`, options);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}
// POST request
export const post = async <T>(path: string, body: any,tag?:any): Promise<T> => {


    return postToRouteHandler({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({body, path,tag}),
    });
};

// PUT request
export const put = async <T>(path: string, body: any): Promise<T> => {
    const url = `${BASE_URL}${path}`;
    return fetcher<T>(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });
};

// DELETE request
export const del = async <T>(path: string): Promise<T> => {
    const url = `${BASE_URL}${path}`;
    return fetcher<T>(url, { method: 'DELETE' });
};

