This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The server is written with Flask using Python.

## Getting Started

First, ensure that you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your local machine. You should also have Python installed to run the backend.

## Running the server locally

1. Navigate to the server directory:

```shell
cd api
```

2. Create a Python virtual environment:

```shell
python3 -m venv venv
```

3. Activate the virtual environment:

```shell
source venv/bin/activate
```

4. Install all Python dependencies using `pip`:

```shell
pip install -r requirements.txt
```

5. Run the Flask server

```shell
python runserver.py
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000) with your browser. The server should be running there.

## Running the client locally

If you started by running the server, you will need to initialize a new terminal session in the root directory.

1. Navigate to the client directory:

```shell 
cd client
```

2. Install the required dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

