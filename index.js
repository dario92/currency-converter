// My API key : 62baa34b0d64b9002beffe2b34415384fa853d69
function currencyConverter( key ){
	this.key 		= key;
	this.currencies = ['AUD', 'CAD','CHF','DKK','EUR','GBP','HKD','JPY','MXN','NZD','PHP','SEK','SGD','THB','USD','ZAR']
}

currencyConverter.prototype = {
	convert : function( from, to, amount, cb ){
		
		if( !this._isValidAPIKey() || !this._isValidCurrency( from ) || !this._isValidCurrency( to )  )
			if( typeof cb === 'function' ) cb( new Error("Invalid functions parameters") );

	},

	_isValidCurrency : function( currency ){ return typeof currency != 'string' || this.currencies.indexOf( currency.toUpperCase() ) === -1 ? false : true; },
	_isValidAPIKey : function(){ return !this.key ? false : true; },
	_isValidAmount : function(){}
}


new currencyConverter().convert( 'aud', 'usd', 234, function( err ){
	console.log( err );
});

// module.export = currencyConverter;