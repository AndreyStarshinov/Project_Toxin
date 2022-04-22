function _classCallCheck(instance, Constructor) {
     if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function"); 
        } 
}

function _defineProperties(target, props) { 
    for (var i = 0; i < props.length; i++) {
         var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); 
        } 
}

function _createClass(Constructor, protoProps, staticProps) { 
    if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; 
}

var Dropdown = /*#__PURE__*/function () {
  function Dropdown(blocks) {
    var _this = this;

    _classCallCheck(this, Dropdown);

    this.blocks = blocks;
    this.setListener(this.blocks);
    this.setOpenItems(this.blocks);
    this.setBtnListeners(this.blocks);
    this.guests = null;
    this.adults = ["гость", "гостя", "гостей"];
    this.newborns = ["младенец", "младенца", "младенцев"];
    this.beds = ["спальня", "спальни", "спален"];
    this.sofas = ["кровать", "кровати", "кроватей"];
    this.baths = ["ванна", "ванны", "ванн"];
    this.blocks.forEach(function (fullBlock) {
      _this.removeCleanBtn(fullBlock, _this.checkUseBtn(fullBlock));
    });
    this.clear();
  }

  _createClass(Dropdown, [{
    key: "setListener",
    value: function setListener(items) {
      var _this2 = this;

      items.forEach(function (element) {
        var top = _this2.findTopBlock(element);

        top.addEventListener("click", function (e) {
          var selectionBlock = element.querySelector(".selection");
          var currentHeight = selectionBlock.firstElementChild.clientHeight;

          if (!element.classList.contains("active")) {
            selectionBlock.style.height = currentHeight + "px";
          } else {
            selectionBlock.style.height = 0 + "px";
          }

          element.classList.toggle("active");
        });
      });
    }
  }, {
    key: "setOpenItems",
    value: function setOpenItems(items) {
      items.forEach(function (element) {
        var selectionBlock = element.querySelector(".selection");
        var currentHeight = selectionBlock.firstElementChild.clientHeight;

        if (element.classList.contains("active")) {
          selectionBlock.style.height = currentHeight + "px";
        }
      });
    }
  }, {
    key: "findTopBlock",
    value: function findTopBlock(element) {
      for (var i = 0; i < element.children.length; i++) {
        if (element.children[i].className.includes("top")) {
          return element.children[i];
        }
      }
    }
  }, {
    key: "setBtnListeners",
    value: function setBtnListeners(blocks) {
      var _this3 = this;

      blocks.forEach(function (block) {
        if (block.querySelector(".dropdown-block__option-nums")) {
          var nums = block.querySelectorAll(".dropdown-block__option-nums");
          var standardTitle = block.querySelector(".input-dropdown").value;
          nums.forEach(function (element) {
            var minusBtn = element.querySelector("div:first-child");
            var plusBtn = element.querySelector("div:last-child");
            minusBtn.addEventListener("click", function (e) {
              _this3.changeNums(e.target, standardTitle);
            });
            plusBtn.addEventListener("click", function (e) {
              _this3.changeNums(e.target, standardTitle);

              minusBtn.classList.remove("dropdown-block__disabled-btn");
            });
          });
        }
      });
    }
  }, {
    key: "changeNums",
    value: function changeNums(item, sTitle) {
      var parent = item.parentElement;
      var text = parent.querySelector("span");
      var fullBlock = parent.closest(".dropdown-block__dropdown");
      var title = fullBlock.querySelector(".input-dropdown");

      if (item.innerText === "+") {
        text.innerText = parseInt(text.innerText) + 1;
      } else {
        if (text.innerText != "0") text.innerText = parseInt(text.innerText) - 1;
        if (text.innerText == "0") item.classList.add("dropdown-block__disabled-btn");
      }

      this.removeCleanBtn(fullBlock, this.checkUseBtn(fullBlock));
      title.value = this.getTitles(fullBlock, sTitle);
    }
  }, {
    key: "checkUseBtn",
    value: function checkUseBtn(parent) {
      return parent.querySelector(".dropdown-block__use.use");
    }
  }, {
    key: "getTitles",
    value: function getTitles(block, sTitle) {
      var _this4 = this;

      var options = block.querySelectorAll(".dropdown-block__option");
      var text = [];
      var isEmpty = true;
      this.guests = 0;
      options.forEach(function (element) {
        var guestTitle = element.querySelector("h3").innerText.toLowerCase();
        var guestNum = element.querySelector("span").innerText;

        if (guestTitle == "взрослые" || guestTitle == "дети") {
          _this4.guests += parseInt(guestNum);
        }
      });
      options.forEach(function (element) {
        var title = element.querySelector("h3").innerText.toLowerCase();
        var num = element.querySelector("span").innerText;

        if (parseInt(num) != 0) {
          if (title == "взрослые" || title == "дети") {
            if (_this4.guests == 1) title = _this4.adults[0];else if (_this4.guests > 1 && _this4.guests < 5) title = _this4.adults[1];else title = _this4.adults[2];
            num = _this4.guests;
          } else if (title == "младенцы") {
            if (num == 1) title = _this4.newborns[0];else if (num > 1 && num < 5) title = _this4.newborns[1];else title = _this4.newborns[2];
          } else if (title == "спальни") {
            if (num == 1) title = _this4.beds[0];else if (num > 1 && num < 5) title = _this4.beds[1];else title = _this4.beds[2];
          } else if (title == "кровати") {
            if (num == 1) title = _this4.sofas[0];else if (num > 1 && num < 5) title = _this4.sofas[1];else title = _this4.sofas[2];
          } else if (title == "ванные комнаты") {
            if (num == 1) title = _this4.baths[0];else if (num > 1 && num < 5) title = _this4.baths[1];else title = _this4.baths[2];
          }

          text.push("".concat(num, " ").concat(title));
        }
      });
      options.forEach(function (element) {
        var num = element.querySelector("span").innerText;
        if (num != 0) isEmpty = false;
      });
      if (isEmpty) text.push(sTitle);
      text = text.filter(function (item, index, array) {
        return array.indexOf(item) == index;
      }).join(", ");

      if (text.length > 20) {
        var newText = "";

        for (var i = 0; i < 20; i++) {
          newText += text[i];
        }

        return newText + "...";
      } else return text;
    }
  }, {
    key: "removeCleanBtn",
    value: function removeCleanBtn(block, hasUseBtn) {
      if (hasUseBtn) {
        var cleanBtn = block.querySelector(".dropdown-block__use.clean");
        var nums = block.querySelectorAll(".dropdown-block__option-nums");
        var count = 0;
        nums.forEach(function (element) {
          var span = element.querySelector("span");
          if (span.innerText == "0") count += 1;
        });

        if (count == nums.length) {
          cleanBtn.style.display = "none";
        } else {
          cleanBtn.style.display = "block";
        }
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var cleanBtns = document.querySelectorAll(".clean");
      cleanBtns.forEach(function (cleanBtn) {
        cleanBtn.onclick = function (e) {
          var parentBlock = this.closest(".selection");
          var input = parentBlock.previousElementSibling.querySelector("input");
          var options = parentBlock.querySelectorAll(".dropdown-block__option");
          options.forEach(function (option) {
            var btnBlock = option.querySelector(".dropdown-block__option-nums");
            var minusBtn = btnBlock.firstElementChild;
            option.querySelector("span").innerText = 0;
            minusBtn.classList.add("dropdown-block__disabled-btn");
          });
          cleanBtn.style.display = "none";
          input.value = "Сколько гостей";
        };
      });
    }
  }]);

  return Dropdown;
}();

var dropdownAll = document.querySelectorAll(".dropdown-block__dropdown");
new Dropdown(dropdownAll);
var expandchecksAll = document.querySelectorAll(".expand-checkbox");
new Dropdown(expandchecksAll);