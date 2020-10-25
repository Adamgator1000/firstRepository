const { filter, find } = require("all-the-cities")

const favoriteFood = [
    {
        id: 1,
        name: "rice",
        hot: true,
        western: false
    }, {
        id: 2,
        name: "salad",
        hot: false,
        western: true
    }, {
        id: 3,
        name: "pizza",
        hot: false,
        western: true
    }, {
        id: 4,
        name: "bbq",
        hot: true,
        western: false
    }, {
        id: 5,
        name: "steak",
        hot: true,
        western: true
    }, {
        id: 6,
        name: "chicken wings",
        hot: true,
        western: true
    }
]

var findWesternDishes = function(list){
    for (var ii = 0; ii < list.length; ii++){
        var item = list[ii]
        if (item.western){
            console.log(item)
        }
    }
}

var findFoodByName = function(list, foodName){
    for (var ii = 0; ii < list.length; ii++){
        var item = list[ii]
        if (item.name === foodName){
            var result = item
        }
    }
    return result
}

// The JavaScript Data Methods: Find
const chickenWings = favoriteFood.find(function(item){
    if (item.name === "chicken wings"){
        return true
    }
})

const the5thFood = favoriteFood.find(function(item){
    if (item.id === 5){
        return true
    }
})

// Filter
const westernFood = favoriteFood.filter(function(item){
    if (item.western){
        return true
    }
})

const coldFood = favoriteFood.filter(function(item){
    if (item.hot === false){
        return true
    }
})
console.log(westernFood, coldFood)