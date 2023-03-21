//how we can visualize data like power bi in js?    
 try {
 // Retrieve the page collection.
 const pages = await report.getPages();

 // Retrieve the active page.
 let activePage = pages.filter(function (page) {
     return page.isActive;
 })[0];

     const visuals = await page.getVisuals();
console.log(
 visuals.map(function (visual) {
     return {
         name: visual.name,
         type: visual.type,
         title: visual.title,
         layout: visual.layout
     };
 })); catch (errors) {
 console.log(errors); }


  // Retrieve the target visual.
 let visual = visuals.filter(function (visual) {
     return visual.name === "VisualName";
 })[0];

 const result = await visual.exportData(models.ExportDataType.Summarized);
 console.log(result.data); }




//Source: https://stackoverflow.com/questions/74796290


