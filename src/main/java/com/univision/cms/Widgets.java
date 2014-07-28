package com.psddev.brightspot;

import com.psddev.cms.tool.Tool;
import com.psddev.cms.db.*;
import com.psddev.cms.tool.*;
import com.psddev.dari.db.*;
import com.psddev.dari.util.*;
import java.util.*;

public class Widgets extends Tool {

	//private static Logger LOGGER = LoggerFactory.getLogger(DashboardWidget.class);
	
    @Override
    public List<Plugin> getPlugins() {
        List<Plugin> plugins = new ArrayList<Plugin>();

        plugins.add(createPageWidget(
                "Dashboard Widget",
                "dashboardWidget",
                "/_widgets/widget.jsp",
                DASHBOARD_WIDGET_POSITION, 1, 1));
                
        /*plugins.add(createJspWidget(
                "Content Widget",
                "contentWidget",
                "/_widgets/contentWidget.jsp",
                CONTENT_RIGHT_WIDGET_POSITION, 0.0, 100.0));
                
         plugins.add(createPageWidget(
                "Content Widget",
                "contentWidget",
                "/_widgets/contentWidget.jsp",
                CONTENT_BOTTOM_WIDGET_POSITION, 0.0, 100.0));*/

        return plugins;
    }

}