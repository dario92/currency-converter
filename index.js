function currencyConverter ( key ){
	this.key = key;
}


currencyConverter.prototype = {
	convert : function(){}
	_isValidAPIKey : function(){},
	_isValidCurrency : function(){},
	_isValidAmount : function(){}
}


// module.export = currencyConverter;