import ComponentsDom from "../controller/homepage.controller.js";
import ModalUserMenu from "../controller/modal-user-menu.controller.js";
import ModalEditHabit from "../controller/modal-edit-habit.controller.js";
import ModalEditProfile from "../controller/modal-edit-profile.controller.js";
import ModalCreateHabit from "../controller/modal-create-habit.controller.js";
import ModalDeleteHabit from "../controller/modal-delete-habit.controller.js";
import GetAllRequest from "../controller/api-get-all.controller.js"
import Filter from "../controller/filter-homepage.controller.js";
import VisualResponses from "../controller/modal-responses.controller.js"

ComponentsDom.header1();
ComponentsDom.userInfo();
// ComponentsDom.main();
ModalCreateHabit.render();
ModalUserMenu.render();
ModalEditProfile.render()
// ModalEditHabit.render();
// ModalDeleteHabit.render();
// Filter.allPages();


// await ComponentsDom.habitRequest()

ComponentsDom.filters()

