# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




# To deploye the applicatin on ec2

## To build the image
https://www.freecodecamp.org/news/how-to-dockerize-a-react-application/


docker image build -t front-end:v8 .
docker run -p 3000:3000 front-end:v8 # tester en local

docker login

docker image tag front-end:v8 lucaszub/react-front-end:v8          # changer le v1 pour les future versions 

docker push lucaszub/react-front-end:v8

docker pull lucaszub/react-front-end:v8



ssh -i "cle-weather-app-project.pem" ubuntu@ec2-52-47-201-9.eu-west-3.compute.amazonaws.com

ssh -i "cle-weather-app-project.pem" ubuntu@ec2-51-44-22-51.eu-west-3.compute.amazonaws.com
scp -i "C:\wild code school\weather_app\frontend weather app\cle-weather-app-project.pem" -r "C:\wild code school\weather_app\frontend weather app\weather_app" ubuntu@35.180.250.227:/home/ubuntu

# installer docker 
https://docs.docker.com/engine/install/ubuntu/
docker login

docker pull lucaszub/react-front-end:v5

docker push lucaszub/react-front-end:v5


docker run -p 3000:3000 lucaszub/react-front-end:v7

docker run -d -p 3000:3000 front-end:v5

172.31.13.119

http://172.31.13.119:3000
51.44.22.51

http://51.44.22.51:3000






http://localhost:8000