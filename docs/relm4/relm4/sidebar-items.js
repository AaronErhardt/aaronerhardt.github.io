initSidebarItems({"attr":[["async_trait","Re-export of [`async_trait::async_trait`]"]],"fn":[["gtk_application","Returns the application created by [`RelmApp::new`]."],["set_global_css","Sets a custom global stylesheet."],["set_global_css_from_file","Sets a custom global stylesheet from a file."],["spawn_future","Spawns a future on the main thread in the main event loop."]],"macro":[["send","Send a message with a sender."]],"mod":[["drawing","Utility to help drawing on a [`gtk::DrawingArea`] in a Relm4 application. Create a DrawHandler, initialize it, and get its context when handling a message (that could be sent from the draw signal)."],["factory","Defines traits and data types used to efficiently generating widgets from collections."],["util","Utility traits for working with GTK widgets."]],"struct":[["AsyncRelmWorker","A [`AsyncRelmWorker`] is like a [`RelmWorker`] but runs the [`AsyncComponentUpdate::update`] function in a tokio `Runtime`."],["RelmApp","The app that runs the main application. A [`RelmApp`] consists of a model that stores the application state and widgets that represent the UI."],["RelmComponent","A component that can be part of the main application or other components."],["RelmWorker","[`RelmWorker`]s are like `RelmComponent`s but they don’t have any widgets."],["Sender","A `Sender` that can be used to send items to the corresponding main context receiver."]],"trait":[["AppUpdate","Define the behavior to update the model of the main app."],["AsyncComponentUpdate","[`ComponentUpdate`] for asynchronous workers and components."],["ComponentUpdate","Define the behavior to initialize and update a component or worker."],["Components","Define how to initialize one or more components."],["Model","Trait that defines the types associated with the model."],["Widgets","Define behavior to turn the data of you model into widgets."]]});