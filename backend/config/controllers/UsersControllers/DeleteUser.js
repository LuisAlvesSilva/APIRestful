import User from '../../models/userModel.js';

async function deleteUser(request, response) {
    const id = request.params.id;

    await User.findByIdAndDelete({ _id: id});

    return response.status(200).json({ response: "User Deleted"});
}

export { deleteUser };