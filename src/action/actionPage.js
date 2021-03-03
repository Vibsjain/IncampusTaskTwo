const { INC_PAGE } = require("./actiontypes");

export const incpage = (page) => {
    return {
        data: page + 1,
        type: INC_PAGE
    }
}