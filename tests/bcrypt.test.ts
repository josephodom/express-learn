import bcrypt from 'bcrypt';

test('bcrypt sanity check', () => {
    const password = 'password123';
    const hash = bcrypt.hashSync(password, 10);
    
    expect(bcrypt.compareSync(password, hash))
        .not
        .toBe(bcrypt.compareSync('not the password', hash))
    ;
});
