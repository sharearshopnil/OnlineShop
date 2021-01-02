const validate  = require('/xampp/htdocs/petshop_management/javascript/sign-up');

test('should validate password',()=> {
    expect(validate.validatepassword1("password","password1")).toBe('Passwords Don\'t Match');
});

test('should validate password',()=> {
    expect(validate.validatepassword1("password","password")).toBe('Match');
});