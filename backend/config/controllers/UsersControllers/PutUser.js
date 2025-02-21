import User from '../../models/userModel.js';

async function putUser(request, response) {
    const id = request.params.id;

    await User.findByIdAndUpdate({ _id: id});
    return response.status(200).json({ response: "User Updated!"})
}

export { putUser };