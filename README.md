AB_leet_table
==========

AB_leet_table makes table data display vertically on smaller devices using vanilla JavaScript.

## Screenshot

### Desktop
![Screenshot](/screenshot-desktop.png?raw=true)

### Mobile
![Screenshot](/screenshot-mobile.png?raw=true)

## Required files

### Styles
[AB_leet_table/scss/components/_AB_leet_table.scss](https://github.com/andybeckmann/AB_leet_table/blob/master/scss/components/_AB_leet_table.scss)

### Scripts
[AB_leet_table/js/AB_leet_table.js](https://github.com/andybeckmann/AB_leet_table/blob/master/js/AB_leet_table.js)

## Example

### HTML
```html
<table id="leet_table">
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
            <th>Header 4</th>
            <th>Header 5</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
        </tr>
    </tbody>
</table>
```

### JS
```javascript
leetTable("leet_table");
```