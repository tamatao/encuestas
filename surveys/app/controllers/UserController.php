<?php
class UserController extends BaseController {

    public function getIndex()
    {
        //
        $allUsers = User::paginate(15);
        return $allUsers->toJson();
    }

    public function postProfile()
    {
        //
    }

}
?>