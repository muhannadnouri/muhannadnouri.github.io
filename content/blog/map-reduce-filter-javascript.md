+++
image = "https://i.imgur.com/X08jDTt.jpg"
showonlyimage = false
date = "2020-01-08"
title = "Map, Reduce & Filter in JavaScript"
draft = false
weight = 2
+++

JavaScript
<!--more-->

## Map, Reduce, & Filter in JavaScript

- In this post, I will explain the JavaScript's map, reduce, and filter functions work, and explore some practical use cases of functional programming in JavaScript.

#### What do they all have in common?
- All three functions are array methods (i.e. methods you can call on your array variables).
- The returned value in each function is a new array containing the result of the operations performed on the original array in a function you provide.

## Map
- The `map()`  method allows you iterate over each element in your array, and then manipulate each element in any desired way through the use of a provided function.
- The provided function be an anonymous function, or a named function.
- It is very important to note that you want to use the `map()` method when you are expecting a return value from your function. Otherwise, it is recommended to use JavaScript's `forEach()` method when you want to modify the original array.
- TL;DR - `map()` is a `for` loop with a return value.

**Basic Example**
- This is a simple example provided by the [MDN]([https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)) webpage on the `map()` method
```
const evenNumbers = [2, 4, 6]

const result = evenNumbers.map(currentValue => currentValue * 2)

// result = [4, 8, 12]
```

**Practical Use Case**
- This is an example you will often encounter where an API call returns an array of objects containing information about your users.
- The goal here is to extract the list of names from the response received from your API.
```
const users = [
{
	'name': 'John Doe',
	'address': '1452 Broadway Ave',
},
{
	'name': 'Jane Doe',
	'address': '1552 Broadway Ave',
},
{
	'name': 'Hannibal Lecter',
	'address': '1337 Broadway Avenue',
}]

const names = users.map(currentItem => {
	return currentItem['name']
})

// names = ['John Doe', 'Jane Doe', 'Hannibal Lecter']
```

## Filter
- Similar to the `map()` method, the `filter()` method allows you to iterate over the elements of your array.
- Although, the difference in this case is that `filter()` returns values that pass some test case provided.

**Basic Example**
- This is another simple example provided by the [MDN]([https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)) webpage on the `filter()` method
```
const numbers = [2, 4, 6, 11, 12, 33]

const oddNumbers = numbers.filter(x => x % 2 === 0)

// oddNumbers = [11, 33]
```

**Practical Use Case**
- Similar to the previous example, this is a situation where an API call returns an objects containing information about your users.
- The goal is to extract the names of users living outside the United States from the response received back from your API.
- The goal is to extract the names of users living outside of the United States form the response received back from your API.
```
const users = [
{
	'name': 'John Doe',
	'address': 'Wellington St, Ottawa, ON K1A 0A9',
	'country': 'Canada'
},
{
	'name': 'Jane Doe',
	'address': '1600 Pennsylvania Ave NW, Washington, DC 20500',
	'country': 'United States'

},
{
	'name': 'Hannibal Lecter',
	'address': '10800 97 Ave NW, Edmonton, AB T5K 2B6',
	'country': 'Canada'

}]

const expatriates = users.filter(currentItem => {
	return currentItem['country'] !== 'United States'
})

/* expatriates = [
{
	name: 'John Doe',
	address: 'Wellington St, Ottawa, ON K1A 0A9',
	country: 'Canada'
},
{
	name: 'Hannibal Lecter',
	address: '10800 97 Ave NW, Edmonton, AB T5K 2B6',
	country: 'Canada'
}]
*/
```
- Using this code snippet alone will not suffice if we are attempting to obtain an array containing names alone.
- Therefore, building on the previous knowledge we acquired about the `map()` method, we will need one more function call.

```
const expatriateNames = expatriates.map(currentValue => {
	return currentValue['name']
})

// expatriateNames = ['John Doe', 'Hannibal Lecter']
```

## Reduce
- As the name suggests, the `reduce()` method will accept an array containing multiple values and reduce them down into a single return value.

**Syntax**
```
	array.reduce((accumulator, current) => {}, initialValue)
```

**Basic Example**
- In this particular example, we are attempting to iterate over the elements of an array and sum of them up.
```
const array = [1, 2, 3]

const result = array.reduce((previousValue, currentValue) => {
	return previousValue + currentValue
})

// result = 6
```

**Practical Use Case**
- The previous practical use case provided for the `filter()` is less than ideal as we had to rely on two different function calls to obtain our desired result.
- In this implementation, we have the same goal as previous, extract the list of names of users living outside the United States from our response received from our API.
- In this case, we can reduce both `filter()` and `map()` method calls into a single function using the `reduce()` method.

```
const users = [
{
	'name': 'John Doe',
	'address': 'Wellington St, Ottawa, ON K1A 0A9',
	'country': 'Canada'
},
{
	'name': 'Jane Doe',
	'address': '1600 Pennsylvania Ave NW, Washington, DC 20500',
	'country': 'United States'

},
{
	'name': 'Hannibal Lecter',
	'address': '10800 97 Ave NW, Edmonton, AB T5K 2B6',
	'country': 'Canada'

}]

const expatriates = users.reduce((result, user) => {
	// filter() equivalent
	if (user['country'] === 'United States') {
		return result
	}

	// map() equivalent
	result.push(user['name'])
	return result
}, initialValue = [])
```
- In this implementation, we do not add any value to the accumulator array, in this case we have called it `result`, thus successfully filtering out users who live outside the United States.
- Next, once we have passed the initial `if` statement check, we add the name of the user to the accumulate array.
- It is important that note that while you are able to return a single output from a reduce function, that return value can be an array by initializing the initial value to an empty array.
- Perhaps, my [favourite explanation]([https://www.youtube.com/watch?v=tVCYa_bnITg](https://www.youtube.com/watch?v=tVCYa_bnITg)) of the `reduce()` method suggested thinking of the `accumulator` as the previous value.


## Credits
- This post would not have been possible without these wonderful tools and content creators
	* [Mozilla Developer Network]([https://developer.mozilla.org/en-US/](https://developer.mozilla.org/en-US/))
	* [Fireship]([https://fireship.io/](https://fireship.io/))
	* [Repl.it]([https://repl.it/](https://repl.it/))