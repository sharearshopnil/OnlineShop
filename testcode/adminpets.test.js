const get_info  = require('/xampp/htdocs/petshop_management/javascript/admin-pets.js');

test('should bring name',()=> {
    expect(get_info.getpet_name(1)).toBe('Dog');
});
test('should bring name',()=> {
    expect(get_info.getpet_name(7)).toBe('Fish');
});
test('should bring id',()=> {
    expect(get_info.getpet_id("Cat")).toBe(6);
});
// test('should bring id',()=> {
//     expect(get_info.getpet_id("Cat")).toBe("6");
// })
// test('should bring name',()=> {
//     expect(get_info.getpet_name(7)).toBe('Fis');
// });