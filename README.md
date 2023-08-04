Dynamic Form Project
====================

This is a dynamic form builder application built using Angular. It allows users to create custom forms with various types of input fields, including text, number, date, select, radio, and checkbox. The form configurations are stored in the `FormsService`, and the application supports various functionalities like adding, deleting, and editing form entries.

Note: This project was done for a recruitment interview at Bugloos.

[![Bugloos Angular Task](https://i.ytimg.com/vi/80qt5F_uFrg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgQiguMA8=&amp;rs=AOn4CLDeMQP5V83T5dWDgKmK8SESJxOVVQ)](https://www.youtube.com/watch?v=80qt5F_uFrg)


Getting Started
---------------

To get started with this project, follow the steps below:

1.  Clone the repository:

`git clone https://github.com/aliosmanyuksel/dynamic-form.git`

`cd dynamic-form`

2.  Install dependencies:

`npm install`

3.  Start the development server:

`ng serve`

The application will be available at `http://localhost:4200/`.

Folder Structure
----------------

The project follows the following folder structure:

-   `src/app/core`: Contains shared core modules, services, and utilities.
-   `src/app/shared`: Contains shared components, directives, and pipes.
-   `src/app/modules/dynamic-form`: Contains the main dynamic-form module with form components and other related files.

How to Use
----------

1.  Define the form fields in `forms.service.ts`: Modify the `formConfig` array with the desired form fields, their types, and other configurations.

2.  Use the `dynamic-form` component: In your application, you can use the `dynamic-form` component to render the dynamic form with the configured fields.


`<!-- YourComponent.html -->
<ng-container *ngIf="formConfig">
  <dynamic-form [fields]="formConfig"></dynamic-form>
</ng-container>`

3.  Handle form submissions: The form submission logic can be handled in the `FormComponent`. You can define `beforeSubmitService` and `afterSubmitService` functions for each field in the `formConfig` array to perform operations before and after form submission.

Contributions
-------------

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

License
-------

This project is licensed under the MIT License.