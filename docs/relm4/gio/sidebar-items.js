initSidebarItems({"constant":[["NONE_ACTION",""],["NONE_ACTION_GROUP",""],["NONE_ACTION_MAP",""],["NONE_APPLICATION",""],["NONE_APPLICATION_COMMAND_LINE",""],["NONE_APP_INFO",""],["NONE_APP_LAUNCH_CONTEXT",""],["NONE_ASYNC_RESULT",""],["NONE_BUFFERED_INPUT_STREAM",""],["NONE_BUFFERED_OUTPUT_STREAM",""],["NONE_CANCELLABLE",""],["NONE_CONVERTER",""],["NONE_CONVERTER_INPUT_STREAM",""],["NONE_CONVERTER_OUTPUT_STREAM",""],["NONE_DATA_INPUT_STREAM",""],["NONE_DATA_OUTPUT_STREAM",""],["NONE_DBUS_INTERFACE",""],["NONE_DBUS_INTERFACE_SKELETON",""],["NONE_DBUS_OBJECT",""],["NONE_DBUS_PROXY",""],["NONE_DRIVE",""],["NONE_EMBLEMED_ICON",""],["NONE_FILE",""],["NONE_FILE_ENUMERATOR",""],["NONE_FILE_INPUT_STREAM",""],["NONE_FILE_IO_STREAM",""],["NONE_FILE_MONITOR",""],["NONE_FILE_OUTPUT_STREAM",""],["NONE_FILTER_INPUT_STREAM",""],["NONE_FILTER_OUTPUT_STREAM",""],["NONE_ICON",""],["NONE_INET_ADDRESS",""],["NONE_INET_ADDRESS_MASK",""],["NONE_INET_SOCKET_ADDRESS",""],["NONE_INITABLE",""],["NONE_INPUT_STREAM",""],["NONE_IO_STREAM",""],["NONE_LIST_MODEL",""],["NONE_LOADABLE_ICON",""],["NONE_MEMORY_INPUT_STREAM",""],["NONE_MEMORY_MONITOR",""],["NONE_MEMORY_OUTPUT_STREAM",""],["NONE_MENU_ATTRIBUTE_ITER",""],["NONE_MENU_LINK_ITER",""],["NONE_MENU_MODEL",""],["NONE_MOUNT",""],["NONE_MOUNT_OPERATION",""],["NONE_NETWORK_ADDRESS",""],["NONE_NETWORK_MONITOR",""],["NONE_NETWORK_SERVICE",""],["NONE_OUTPUT_STREAM",""],["NONE_PERMISSION",""],["NONE_POLLABLE_INPUT_STREAM",""],["NONE_POLLABLE_OUTPUT_STREAM",""],["NONE_PROXY",""],["NONE_PROXY_ADDRESS",""],["NONE_PROXY_RESOLVER",""],["NONE_REMOTE_ACTION_GROUP",""],["NONE_RESOLVER",""],["NONE_SEEKABLE",""],["NONE_SETTINGS",""],["NONE_SETTINGS_BACKEND",""],["NONE_SIMPLE_ACTION_GROUP",""],["NONE_SOCKET",""],["NONE_SOCKET_ADDRESS",""],["NONE_SOCKET_ADDRESS_ENUMERATOR",""],["NONE_SOCKET_CLIENT",""],["NONE_SOCKET_CONNECTABLE",""],["NONE_SOCKET_CONNECTION",""],["NONE_SOCKET_LISTENER",""],["NONE_SOCKET_SERVICE",""],["NONE_TCP_CONNECTION",""],["NONE_THREADED_SOCKET_SERVICE",""],["NONE_TLS_BACKEND",""],["NONE_TLS_CERTIFICATE",""],["NONE_TLS_CLIENT_CONNECTION",""],["NONE_TLS_CONNECTION",""],["NONE_TLS_DATABASE",""],["NONE_TLS_FILE_DATABASE",""],["NONE_TLS_INTERACTION",""],["NONE_TLS_PASSWORD",""],["NONE_TLS_SERVER_CONNECTION",""],["NONE_UNIX_FD_LIST",""],["NONE_UNIX_INPUT_STREAM",""],["NONE_UNIX_OUTPUT_STREAM",""],["NONE_UNIX_SOCKET_ADDRESS",""],["NONE_VFS",""],["NONE_VOLUME",""],["NONE_VOLUME_MONITOR",""]],"enum":[["BusType",""],["ConverterResult",""],["CredentialsType",""],["DBusMessageByteOrder",""],["DBusMessageHeaderField",""],["DBusMessageType",""],["DataStreamByteOrder",""],["DataStreamNewlineType",""],["DriveStartStopType",""],["EmblemOrigin",""],["FileAttributeStatus",""],["FileAttributeType",""],["FileMonitorEvent",""],["FileType",""],["IOErrorEnum",""],["InetAddressBytes",""],["MemoryMonitorWarningLevel",""],["MountOperationResult",""],["NetworkConnectivity",""],["NotificationPriority",""],["PasswordSave",""],["ResolverRecordType",""],["ResourceError",""],["SocketClientEvent",""],["SocketFamily",""],["SocketListenerEvent",""],["SocketProtocol",""],["SocketType",""],["TlsAuthenticationMode",""],["TlsCertificateRequestFlags",""],["TlsChannelBindingType",""],["TlsDatabaseLookupFlags",""],["TlsInteractionResult",""],["TlsRehandshakeMode",""],["UnixSocketAddressType",""],["ZlibCompressorFormat",""]],"fn":[["bus_get",""],["bus_get_future",""],["bus_get_sync",""],["bus_own_name",""],["bus_own_name_on_connection",""],["bus_unown_name",""],["bus_unwatch_name",""],["bus_watch_name",""],["bus_watch_name_on_connection",""],["compile_resources","Call from build script to run `glib-compile-resources` to generate compiled gresources to embed in binary with [resources_register_include]. `target` is relative to `OUT_DIR`."],["content_type_can_be_executable",""],["content_type_equals",""],["content_type_from_mime_type",""],["content_type_get_description",""],["content_type_get_generic_icon_name",""],["content_type_get_icon",""],["content_type_get_mime_dirs",""],["content_type_get_mime_type",""],["content_type_get_symbolic_icon",""],["content_type_guess",""],["content_type_guess_for_tree",""],["content_type_is_a",""],["content_type_is_mime_type",""],["content_type_is_unknown",""],["content_type_set_mime_dirs",""],["content_types_get_registered",""],["dbus_address_escape_value",""],["dbus_address_get_for_bus_sync",""],["dbus_address_get_stream",""],["dbus_address_get_stream_future",""],["dbus_address_get_stream_sync",""],["dbus_generate_guid",""],["dbus_gvalue_to_gvariant",""],["dbus_gvariant_to_gvalue",""],["dbus_is_address",""],["dbus_is_guid",""],["dbus_is_interface_name",""],["dbus_is_member_name",""],["dbus_is_name",""],["dbus_is_supported_address",""],["dbus_is_unique_name",""],["io_error_from_errno",""],["io_modules_scan_all_in_directory",""],["io_scheduler_cancel_all_jobs",""],["keyfile_settings_backend_new",""],["memory_settings_backend_new",""],["networking_init",""],["null_settings_backend_new",""],["resources_enumerate_children",""],["resources_get_info",""],["resources_lookup_data",""],["resources_open_stream",""],["resources_register",""],["resources_unregister",""],["unix_is_mount_path_system_internal",""],["unix_is_system_device_path",""],["unix_is_system_fs_type",""]],"macro":[["resources_register_include","Include gresources generated with [compile_resources] and register with glib. `path` is relative to `OUTDIR`."]],"mod":[["functions",""],["prelude","Traits and essential types intended for blanket imports."],["subclass",""],["task",""]],"static":[["DRIVE_IDENTIFIER_KIND_UNIX_DEVICE",""],["FILE_ATTRIBUTE_ACCESS_CAN_DELETE",""],["FILE_ATTRIBUTE_ACCESS_CAN_EXECUTE",""],["FILE_ATTRIBUTE_ACCESS_CAN_READ",""],["FILE_ATTRIBUTE_ACCESS_CAN_RENAME",""],["FILE_ATTRIBUTE_ACCESS_CAN_TRASH",""],["FILE_ATTRIBUTE_ACCESS_CAN_WRITE",""],["FILE_ATTRIBUTE_DOS_IS_ARCHIVE",""],["FILE_ATTRIBUTE_DOS_IS_MOUNTPOINT",""],["FILE_ATTRIBUTE_DOS_IS_SYSTEM",""],["FILE_ATTRIBUTE_DOS_REPARSE_POINT_TAG",""],["FILE_ATTRIBUTE_ETAG_VALUE",""],["FILE_ATTRIBUTE_FILESYSTEM_FREE",""],["FILE_ATTRIBUTE_FILESYSTEM_READONLY",""],["FILE_ATTRIBUTE_FILESYSTEM_REMOTE",""],["FILE_ATTRIBUTE_FILESYSTEM_SIZE",""],["FILE_ATTRIBUTE_FILESYSTEM_TYPE",""],["FILE_ATTRIBUTE_FILESYSTEM_USED",""],["FILE_ATTRIBUTE_FILESYSTEM_USE_PREVIEW",""],["FILE_ATTRIBUTE_GVFS_BACKEND",""],["FILE_ATTRIBUTE_ID_FILE",""],["FILE_ATTRIBUTE_ID_FILESYSTEM",""],["FILE_ATTRIBUTE_MOUNTABLE_CAN_EJECT",""],["FILE_ATTRIBUTE_MOUNTABLE_CAN_MOUNT",""],["FILE_ATTRIBUTE_MOUNTABLE_CAN_POLL",""],["FILE_ATTRIBUTE_MOUNTABLE_CAN_START",""],["FILE_ATTRIBUTE_MOUNTABLE_CAN_START_DEGRADED",""],["FILE_ATTRIBUTE_MOUNTABLE_CAN_STOP",""],["FILE_ATTRIBUTE_MOUNTABLE_CAN_UNMOUNT",""],["FILE_ATTRIBUTE_MOUNTABLE_HAL_UDI",""],["FILE_ATTRIBUTE_MOUNTABLE_IS_MEDIA_CHECK_AUTOMATIC",""],["FILE_ATTRIBUTE_MOUNTABLE_START_STOP_TYPE",""],["FILE_ATTRIBUTE_MOUNTABLE_UNIX_DEVICE",""],["FILE_ATTRIBUTE_MOUNTABLE_UNIX_DEVICE_FILE",""],["FILE_ATTRIBUTE_OWNER_GROUP",""],["FILE_ATTRIBUTE_OWNER_USER",""],["FILE_ATTRIBUTE_OWNER_USER_REAL",""],["FILE_ATTRIBUTE_PREVIEW_ICON",""],["FILE_ATTRIBUTE_RECENT_MODIFIED",""],["FILE_ATTRIBUTE_SELINUX_CONTEXT",""],["FILE_ATTRIBUTE_STANDARD_ALLOCATED_SIZE",""],["FILE_ATTRIBUTE_STANDARD_CONTENT_TYPE",""],["FILE_ATTRIBUTE_STANDARD_COPY_NAME",""],["FILE_ATTRIBUTE_STANDARD_DESCRIPTION",""],["FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME",""],["FILE_ATTRIBUTE_STANDARD_EDIT_NAME",""],["FILE_ATTRIBUTE_STANDARD_FAST_CONTENT_TYPE",""],["FILE_ATTRIBUTE_STANDARD_ICON",""],["FILE_ATTRIBUTE_STANDARD_IS_BACKUP",""],["FILE_ATTRIBUTE_STANDARD_IS_HIDDEN",""],["FILE_ATTRIBUTE_STANDARD_IS_SYMLINK",""],["FILE_ATTRIBUTE_STANDARD_IS_VIRTUAL",""],["FILE_ATTRIBUTE_STANDARD_IS_VOLATILE",""],["FILE_ATTRIBUTE_STANDARD_NAME",""],["FILE_ATTRIBUTE_STANDARD_SIZE",""],["FILE_ATTRIBUTE_STANDARD_SORT_ORDER",""],["FILE_ATTRIBUTE_STANDARD_SYMBOLIC_ICON",""],["FILE_ATTRIBUTE_STANDARD_SYMLINK_TARGET",""],["FILE_ATTRIBUTE_STANDARD_TARGET_URI",""],["FILE_ATTRIBUTE_STANDARD_TYPE",""],["FILE_ATTRIBUTE_THUMBNAILING_FAILED",""],["FILE_ATTRIBUTE_THUMBNAIL_IS_VALID",""],["FILE_ATTRIBUTE_THUMBNAIL_PATH",""],["FILE_ATTRIBUTE_TIME_ACCESS",""],["FILE_ATTRIBUTE_TIME_ACCESS_USEC",""],["FILE_ATTRIBUTE_TIME_CHANGED",""],["FILE_ATTRIBUTE_TIME_CHANGED_USEC",""],["FILE_ATTRIBUTE_TIME_CREATED",""],["FILE_ATTRIBUTE_TIME_CREATED_USEC",""],["FILE_ATTRIBUTE_TIME_MODIFIED",""],["FILE_ATTRIBUTE_TIME_MODIFIED_USEC",""],["FILE_ATTRIBUTE_TRASH_DELETION_DATE",""],["FILE_ATTRIBUTE_TRASH_ITEM_COUNT",""],["FILE_ATTRIBUTE_TRASH_ORIG_PATH",""],["FILE_ATTRIBUTE_UNIX_BLOCKS",""],["FILE_ATTRIBUTE_UNIX_BLOCK_SIZE",""],["FILE_ATTRIBUTE_UNIX_DEVICE",""],["FILE_ATTRIBUTE_UNIX_GID",""],["FILE_ATTRIBUTE_UNIX_INODE",""],["FILE_ATTRIBUTE_UNIX_IS_MOUNTPOINT",""],["FILE_ATTRIBUTE_UNIX_MODE",""],["FILE_ATTRIBUTE_UNIX_NLINK",""],["FILE_ATTRIBUTE_UNIX_RDEV",""],["FILE_ATTRIBUTE_UNIX_UID",""],["MEMORY_MONITOR_EXTENSION_POINT_NAME",""],["MENU_ATTRIBUTE_ACTION",""],["MENU_ATTRIBUTE_ACTION_NAMESPACE",""],["MENU_ATTRIBUTE_ICON",""],["MENU_ATTRIBUTE_LABEL",""],["MENU_ATTRIBUTE_TARGET",""],["MENU_LINK_SECTION",""],["MENU_LINK_SUBMENU",""],["NATIVE_VOLUME_MONITOR_EXTENSION_POINT_NAME",""],["NETWORK_MONITOR_EXTENSION_POINT_NAME",""],["PROXY_EXTENSION_POINT_NAME",""],["PROXY_RESOLVER_EXTENSION_POINT_NAME",""],["SETTINGS_BACKEND_EXTENSION_POINT_NAME",""],["TLS_BACKEND_EXTENSION_POINT_NAME",""],["TLS_DATABASE_PURPOSE_AUTHENTICATE_CLIENT",""],["TLS_DATABASE_PURPOSE_AUTHENTICATE_SERVER",""],["VFS_EXTENSION_POINT_NAME",""],["VOLUME_IDENTIFIER_KIND_CLASS",""],["VOLUME_IDENTIFIER_KIND_HAL_UDI",""],["VOLUME_IDENTIFIER_KIND_LABEL",""],["VOLUME_IDENTIFIER_KIND_NFS_MOUNT",""],["VOLUME_IDENTIFIER_KIND_UNIX_DEVICE",""],["VOLUME_IDENTIFIER_KIND_UUID",""],["VOLUME_MONITOR_EXTENSION_POINT_NAME",""]],"struct":[["Action",""],["ActionGroup",""],["ActionGroupExportId",""],["ActionMap",""],["AppInfo",""],["AppInfoCreateFlags",""],["AppInfoMonitor",""],["AppLaunchContext",""],["Application",""],["ApplicationBuilder","A builder-pattern type to construct [`Application`] objects."],["ApplicationCommandLine",""],["ApplicationFlags",""],["AskPasswordFlags",""],["AsyncResult",""],["BindingBuilder",""],["BufferedInputStream",""],["BufferedInputStreamBuilder","A builder-pattern type to construct [`BufferedInputStream`] objects."],["BufferedOutputStream",""],["BufferedOutputStreamBuilder","A builder-pattern type to construct [`BufferedOutputStream`] objects."],["BusNameOwnerFlags",""],["BusNameWatcherFlags",""],["BytesIcon",""],["Cancellable",""],["CharsetConverter",""],["CharsetConverterBuilder","A builder-pattern type to construct [`CharsetConverter`] objects."],["Converter",""],["ConverterFlags",""],["ConverterInputStream",""],["ConverterInputStreamBuilder","A builder-pattern type to construct [`ConverterInputStream`] objects."],["ConverterOutputStream",""],["ConverterOutputStreamBuilder","A builder-pattern type to construct [`ConverterOutputStream`] objects."],["Credentials",""],["DBusActionGroup",""],["DBusArgInfo",""],["DBusAuthObserver",""],["DBusCallFlags",""],["DBusCapabilityFlags",""],["DBusConnection",""],["DBusConnectionFlags",""],["DBusInterface",""],["DBusInterfaceInfo",""],["DBusInterfaceSkeleton",""],["DBusInterfaceSkeletonFlags",""],["DBusMenuModel",""],["DBusMessage",""],["DBusMessageFlags",""],["DBusMethodInfo",""],["DBusMethodInvocation",""],["DBusNodeInfo",""],["DBusObject",""],["DBusPropertyInfo",""],["DBusProxy",""],["DBusProxyFlags",""],["DBusSendMessageFlags",""],["DBusServer",""],["DBusServerFlags",""],["DBusSignalFlags",""],["DBusSignalInfo",""],["DataInputStream",""],["DataInputStreamBuilder","A builder-pattern type to construct [`DataInputStream`] objects."],["DataOutputStream",""],["DataOutputStreamBuilder","A builder-pattern type to construct [`DataOutputStream`] objects."],["DesktopAppInfo",""],["Drive",""],["DriveStartFlags",""],["Emblem",""],["EmblemedIcon",""],["File",""],["FileAttributeMatcher",""],["FileAttributematcherIter",""],["FileCopyFlags",""],["FileCreateFlags",""],["FileEnumerator",""],["FileIOStream",""],["FileIcon",""],["FileInfo",""],["FileInputStream",""],["FileMeasureFlags",""],["FileMonitor",""],["FileMonitorFlags",""],["FileOutputStream",""],["FileQueryInfoFlags",""],["FilenameCompleter",""],["FilterId",""],["FilterInputStream",""],["FilterOutputStream",""],["GioFuture",""],["GioFutureResult",""],["IOStream",""],["IOStreamAsyncReadWrite",""],["IOStreamSpliceFlags",""],["Icon",""],["InetAddress",""],["InetAddressMask",""],["InetSocketAddress",""],["Initable",""],["InputStream",""],["InputStreamAsyncBufRead",""],["InputStreamAsyncRead",""],["InputStreamRead",""],["ListModel",""],["ListStore",""],["ListStoreBuilder","A builder-pattern type to construct [`ListStore`] objects."],["LoadableIcon",""],["MemoryInputStream",""],["MemoryMonitor",""],["MemoryOutputStream",""],["Menu",""],["MenuAttributeIter",""],["MenuItem",""],["MenuLinkIter",""],["MenuModel",""],["MenuModelExportId",""],["Mount",""],["MountMountFlags",""],["MountOperation",""],["MountUnmountFlags",""],["NetworkAddress",""],["NetworkMonitor",""],["NetworkService",""],["Notification",""],["OutputStream",""],["OutputStreamAsyncWrite",""],["OutputStreamSpliceFlags",""],["OutputStreamWrite",""],["OwnerId",""],["Permission",""],["PollableInputStream",""],["PollableOutputStream",""],["PropertyAction",""],["Proxy",""],["ProxyAddress",""],["ProxyResolver",""],["ReadInputStream",""],["RegistrationId",""],["RemoteActionGroup",""],["Resolver",""],["ResolverNameLookupFlags",""],["Resource",""],["ResourceLookupFlags",""],["Seekable",""],["Settings",""],["SettingsBackend",""],["SettingsBindFlags",""],["SettingsSchema",""],["SettingsSchemaKey",""],["SettingsSchemaSource",""],["SignalSubscriptionId",""],["SimpleAction",""],["SimpleActionGroup",""],["SimpleIOStream",""],["SimplePermission",""],["Socket",""],["SocketAddress",""],["SocketAddressEnumerator",""],["SocketClient",""],["SocketConnectable",""],["SocketConnection",""],["SocketListener",""],["SocketService",""],["SrvTarget",""],["Subprocess",""],["SubprocessFlags",""],["SubprocessLauncher",""],["Task",""],["TcpConnection",""],["ThemedIcon",""],["ThreadedSocketService",""],["TlsBackend",""],["TlsCertificate",""],["TlsCertificateFlags",""],["TlsClientConnection",""],["TlsConnection",""],["TlsDatabase",""],["TlsDatabaseVerifyFlags",""],["TlsFileDatabase",""],["TlsInteraction",""],["TlsPassword",""],["TlsPasswordFlags",""],["TlsServerConnection",""],["UnixFDList",""],["UnixInputStream",""],["UnixMountEntry",""],["UnixMountPoint",""],["UnixOutputStream",""],["UnixSocketAddress",""],["Vfs",""],["Volume",""],["VolumeMonitor",""],["WatcherId",""],["WriteOutputStream",""],["ZlibCompressor",""],["ZlibDecompressor",""]]});