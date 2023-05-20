function compareValues() {
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;

    var name1 = document.getElementById("value1").options[document.getElementById("value1").selectedIndex].text;
    var name2 = document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text;

    if (value1 > value2) {
        alert(name1 + " is faster than " + name2);
    } else if (value1 < value2) {
        alert(name2 + " is faster than " + name1);
    } else {
        alert(name1 + " and " + name2 + " are equal");
    }
}