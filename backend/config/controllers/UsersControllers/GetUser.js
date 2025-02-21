import User from '../../models/userModel.js';

async function getUser(request, response){
    const users = await User.find();

    return response.status(200).json(users);
};

export { getUser };