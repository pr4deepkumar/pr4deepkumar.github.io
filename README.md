
# ePortfolio

Welcome to my ePortfolio repository! This is an online portfolio that showcases my projects, skills, and experiences.

## How to Use

1. Open `public/index.html` and replace:
    ```html
    <title>John Smith</title>
    ```
    with:
    ```html
    <title>Your Name</title>
    ```

2. Open `src/portfolio.js` and make any necessary changes to update your information.

## Deployment

1. Go to `package.json` file and replace:
    ```json
    "homepage": "https://pr4deepkumar.github.io"
    ```
    with:
    ```json
    "homepage": "https://yourusername.github.io"
    ```

## How to Deploy

To deploy this project locally, follow the steps below:

### 1. Install dependencies
First, install the necessary dependencies:

```bash

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

source ~/.nvm/nvm.sh

nvm --version

nvm install 16
nvm use 16

yarn install
```

### 2. Build the project
Next, build the project using the following command. This will prepare your application for deployment:

```bash
yarn build
```

### 3. Deploy the project
Finally, deploy the application:

```bash
yarn deploy
```

Once deployed, you should be able to view your ePortfolio online!

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
