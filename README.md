karma-jsx-chai
==========

[Chai](http://chaijs.com) + [JSX-Chai](https://github.com/bkonkle/jsx-chai) for [Karma](http://karma-runner.github.io)

A karma plugin for [jsx-chai](https://github.com/bkonkle/jsx-chai)

[![NPM](https://nodei.co/npm/karma-jsx-chai.png?downloads=true)](https://npmjs.org/package/karma-chai-sinon)

Installation
------------

Install the plugin from npm:

```sh
$ npm install karma-jsx-chai --save-dev
```

Install the plugin from Github:

```sh
$ npm install 'git://github.com/terakilobyte/karma-jsx-chai.git' --save-dev
```

Add `jsx-chai` to the `frameworks` key in your Karma configuration:

```js
module.exports = function(config) {
  config.set({
  
  // frameworks to use
  frameworks: ['mocha', 'jsx-chai']
          
  // ...
```
              
License
-------

The MIT License (MIT)
