var boxForm = function(doc) {
    var _form,_layout,_height,_width,_message,_counter = 0,_targetDiv;

    var _init = function() {
        _form = doc.forms[0];
        _layout = _form.layout;
        _height = _form.height;
        _width = _form.width;
        _message = _form.message;
        _targetDiv = doc.getElementById('sample');
    }

    this._submit = function(){
        valid = _validate();
        _removeErrors();
        if(valid.length > 0) {
            _displayErrors(valid);
            return false;
        }
        _createElement();
        return false;
    }

    this._validate = function() {
        var errors = [];
        if(isNaN(parseInt(_width.value)) || parseInt(_width.value) < 150 || parseInt(_width.value) > 450) {
            errors.push({'element': 'width'});
        }
        if(isNaN(parseInt(_height.value)) || parseInt(_height.value) < 100 || parseInt(_height.value) > 380) {
            errors.push({'element': 'height'});
        }
        if(_message.value == "") {
            errors.push({'element': 'message'});
        }
        if(getSelectedRadio(_layout) == false) {
            errors.push({'element': 'layout'});
        }

        if(errors.length === 0) {
            return true;
        }

        return errors;
    }

    this._displayErrors = function(errors) {
        var i = 0;
        while(i < errors.length) {
            doc.getElementById(errors[i].element + "Error").className += " visible";
            i++;
        }
    }

    this._removeErrors = function() {
        var errors = doc.getElementsByClassName('error'), i = 0;
        while(i < errors.length) {
            errors[i].className = "error";
            i++;
        }

    }

    this._createElement = function() {
        var div = doc.createElement("div");
        div.style.height = _height.value + "px";
        div.style.width = _width.value + "px";
        div.className = "generatedBox " + getSelectedRadio(_layout).value;
        div.innerHTML = _message.value;

        var counter = doc.createElement('div');
        counter.className = "counter";
        counter.innerHTML = "Element #" + _counter;

        div.appendChild(counter);
        _targetDiv.appendChild(div);

        _counter ++;
    }

    this.getSelectedRadio = function(radioGroup) {
        var i = 0;
        while(i<radioGroup.length){
            if(radioGroup[i].checked){
                return radioGroup[i];
            }
            i++;
        }
        return false;
    }

    return {
        init: _init,
        submit: _submit
    }
}(document);

if(!document.getElementsByClassName) {
    document.getElementsByClassName = function(className) {
        return this.querySelectorAll("." + className);
    };
    Element.prototype.getElementsByClassName = document.getElementsByClassName;
}