module.exports =
    function copy(arr) {
        if (arr.length) {
            var arr1 = [];
        } else if (typeof arr == "object") {
            var arr1 = {};
        } else {
            return arr;
        }
        for (let key in arr) {
            if (typeof arr[key] == "function" || !arr[key].length || typeof arr[key] != "object")
                arr1[key] = arr[key];
            else
                arr1[key] = copy(arr[key]);
        }
        return arr1;
    };

