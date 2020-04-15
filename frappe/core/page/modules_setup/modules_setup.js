frappe.pages['modules_setup'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Modules Setup',
		single_column: true
	});
}