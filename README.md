# Locate Restaurants

Search Restaurants close to you, This app will help you to find one and also will show you locations of popular restaurants around you 

## Installation

Setup:

1. `yarn/yarn install`
2. Create `.env` on `src` folder
2. Copy `.env.example` into `.env` and fill in credentials


To run:

1. `yarn start`
2. Open [http://localhost:3000](http://localhost:3000)

## Stack/Technologies

- React.js : Fast, popular and baked by big companies and huge communities  
- Redux (Saga) : Scalable, shares states across components 
- Material-UI : Faster development, popular and well documented
- LogRocket : Popular, includes necessary features for production log and track the projects

## Structure

```
src
├── assets
│  
├── components
│   └── CustomSnackbar
├── routes
│   └── index
├── screens
│   ├── Error
│   |    ├── NotFound.jsx
│   |    └── style.js
    ├── Map
│   |    ├── index.jsx
│   |    └── style.js
│   ├── SerarchResilts    
|   |    ├── index.jsx
│   │    └── style.js
│   ├── index.jsx
├── store
│   ├── errors
│   |    ├── actions.js
│   |    ├── reducers.js
│   |    └── types.js
│   ├── map
│   |   ├── actions.js
│   │   ├── reducers.js
│   │   ├── types.js
│   │   └── sagas.js
├── theme
│   ├── colors.js
│   ├── palette.js
│   ├── typography.js
│   └── index.js
├── utils
│   └── utilActions.js
├── App.js
├── App.css
├── index.js
└── index.css 
```

Easy to access files, less source mapping for webpack. All the files of the same feature/screens stay together, it is very helpful during the development process. In store all the folder mimics the name of screens so that we can easily find the related files of the same features.

## Trade-off / Future Work 
- Feature : Feature like directions from cuurrent location to destaniation, detailed view of the restaurent, custom pin etc could be added.
- Error Handling : Write methods to handle any type of error from the client.
- Test : Component/end-to-end testing could be added.
- Ui : More colorful and attractive ui

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


