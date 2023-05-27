import { configureStore } from "@reduxjs/toolkit";

import countReducer  from "./reducer/countReducer";

// const rootReducers = {
//     reducer: {
//         countReducer
//     }
// }

// const store = configureStore(rootReducers)

// export default store

export default configureStore({
    reducer: {
        countReducer
    }
})