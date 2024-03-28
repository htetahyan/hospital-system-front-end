
export const BASE_URL=process.env.NEXT_PUBLIC_API_URL!


// Generic fetcher function for handling errors
const fetcher = async <T>(url: string, options: RequestInit): Promise<T >  => {
try {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res=await response.json()
    return res.data;
}  catch (error:any) {
    console.error('Error fetching data:', error.message);
    throw error;
}
};

// GET request
export const get = async <T>(path: string): Promise<T> => {
    const url = `${BASE_URL}${path}`;
    return fetcher<T>(url, { method: 'GET' });
};

// POST request
export const post = async <T>(path: string, body: any): Promise<T> => {
    try {
        const url = `${BASE_URL}${path}`;
        return fetcher<T>(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
    }catch (error:any) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
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

