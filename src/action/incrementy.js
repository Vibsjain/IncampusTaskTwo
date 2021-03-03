const { GETY } = require("./actiontypes");

export const incy = (value) => {
    return {
        data: value,
        type: GETY
    }
}