import User from '../../models/userModel.js';

async function createUser(request, response) {
    const user = request.body;

    const newUser = await User.create(user);

    return response.status(201).json(newUser);
}

export { createUser };