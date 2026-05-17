export const Utils = {
    Function: {
        /**
         * @description Check if value is empty
         * @param {*} value 
         * @returns Boolean
         */
        empty: function (value) {
            if (value === '' || value === null || value === undefined || value === false) {
                return true;
            } else if (Array.isArray(value)) {
                if (value.length > 0) {
                    return false;
                }
                return true
            } else if (typeof value !== 'function') {
                return false;
            } else if (typeof value !== 'object') {
                return false;
            } else if (String(value) !== '') {
                return false;
            } else {
                return true;
            }
        },
        isString: function (value) {
            if (typeof value === 'string' || value instanceof String) {return true;}
            return false;
        },
        /**
         * @description Find and load document element
         * @param {String} elemId Element id
         * @returns HTMLElement
         */
        load : function (elemId) {return document.getElementById(elemId);},
        isScriptAdded: function (src) {
            return Boolean(document.querySelector('script[src="' + src + '"]'));
        },
        ajax: function (url, callback) {
            const httpRequest = new XMLHttpRequest();
            if (this.empty(httpRequest)) {return false;}
            httpRequest.onreadystatechange = function() {
                try {
                    if (httpRequest.readyState === XMLHttpRequest.DONE) {
                        callback({
                            response: httpRequest.responseText, 
                            httpCode: httpRequest.status
                        });
                    }
                } catch (e) {
                    console.error('Catch :: Ajax ERROR', e);
                    callback({error: e});
                }
            }
            httpRequest.onerror = function(e) {console.error('onError :: Ajax ERROR', e); callback({error: e});}
            httpRequest.open('GET', url);
            httpRequest.setRequestHeader('Content-Type', 'text/plain');
            httpRequest.overrideMimeType('text/plain');
            httpRequest.send();
            return true;
        },
        /**
         * @description Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
         * @param {String} text The text to be rendered.
         * @param {String} style The style that text is to be rendered with (e.g. "").
         * @return number in pixels
         * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
         */
        measureText: function (text, style = null) {
            let lDiv = document.createElement('div');
            document.body.appendChild(lDiv);
        
            if (style != null) {
                lDiv.style = style;
            }
            lDiv.style.position = "absolute";
            lDiv.style.left = -1000;
            lDiv.style.top = -1000;
            lDiv.style.zIndex = -1000;
            lDiv.textContent = text;
        
            const lResult = {
                width: lDiv.clientWidth,
                height: lDiv.clientHeight
            };
            document.body.removeChild(lDiv);
            lDiv = null;

            return lResult;
        },
        /**
         * @description Function to check if a URL of the current website origin is reachable
         * @param {String} url 
         * @returns Promise<Boolean>
         */
        isUrlAccessible: async function (url) {
            if (this.empty(url)) {
                return false;
            }

            try {
                const response = await fetch(url, {
                    method: 'HEAD', // Use the HEAD method to check if the URL exists
                });
                if (response.ok) {
                    return true;
                }
                return false;
            } catch (error) {
                return false;
            }
        }
    },
    Math: {
        /**
         * @description Pick an item randomly from a list
         * @param {Array} list 
         * @returns Item
         */
        choose : function (list) {return list[Math.floor(Math.random()*list.length)];},
        /**
         * 
         * @param {Number} min 
         * @param {Number} max 
         * @returns 
         */
        getRandomBetween : function (min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },
        /**
         * 
         * @param {Number} x 
         * @returns 
         */
        easeOutQuart : function (x) {
            return 1 - Math.pow(1 - x, 4)
        },
        /**
         * 
         * @param {Number} x 
         * @returns 
         */
        easeOutQuad : function (x) {
            return 1 - (1 - x) * (1 - x)
        },
        /**
         * 
         * @param {Number} x 
         * @returns 
         */
        easeOutElastic : function (x) {
            const c4 = (2 * Math.PI) / 3
            return x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1
        }
    },
    Sessiontorage: {
        /**
         * @param   {string}    key 
         * @param   {any}       data 
         * @returns {boolean}
         */
        save: function(key, data) {
            var local = false;
            try {
                window.sessionStorage.setItem(key, data);
                local = true;
            } catch (exception) {}
            return local;
        },
        /**
         * @param   {string}    key 
         * @returns {any}
         */
        get: function(key) {
            var local = null;
            try {
                local = window.sessionStorage.getItem(key);
            } catch (exception) {}
            return local;
        },
        /**
         * @param {string} key 
         */
        remove: function(key) {
            window.sessionStorage.removeItem(key);
        },
        removeAll: function() {
            window.sessionStorage.clear();
        }
    }
}