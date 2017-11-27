const DropDownTerminalIface =
   '<node>                                                        \
    <interface name="org.zzrough.GsExtensions.DropDownTerminal">  \
        <property name="Pid" type="i" access="read"/>             \
        <method name="SetGeometry">                               \
            <arg name="x" type="i" direction="in"/>               \
            <arg name="y" type="i" direction="in"/>               \
            <arg name="width" type="i" direction="in"/>           \
            <arg name="height" type="i" direction="in"/>          \
        </method>                                                 \
        <method name="Toggle"/>                                   \
        <method name="Focus"/>                                    \
        <method name="Quit"/>                                     \
        <signal name="Failure">                                   \
            <arg type="s" name="name"/>                           \
            <arg type="s" name="cause"/>                          \
        </signal>                                                 \
    </interface>                                                  \
    </node>';