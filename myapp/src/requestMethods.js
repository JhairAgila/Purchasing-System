import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDFhYTA2MTFlNDg2NjIyMGM1NGZkYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MzA3MjQyNSwiZXhwIjoxNjgzMzMxNjI1fQ.DR2VtTDyZHqXkIpo4-3jx3SA-DWrGQEUtwpKnI0vMvU";
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
});