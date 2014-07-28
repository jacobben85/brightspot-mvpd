package com.psddev.brightspot;

import com.psddev.cms.db.*;
import com.psddev.cms.tool.*;
import com.psddev.dari.db.*;
import com.psddev.dari.util.*;
import java.util.*;

@Renderer.LayoutPath("/common/page-container.jsp")
@Renderer.Path("/article/article-object.jsp")
public class Article extends Content implements Directory.Item {

    private String headline;
    private ReferentialText body;

    public String getHeadline() {
        return headline;
    }

    public void setHeadline(String headline) {
        this.headline = headline;
    }

    public ReferentialText getBody() {
        return body;
    }

    public void setBody(ReferentialText body) {
        this.body = body;
    }

    @Override
    public String createPermalink(Site site) {

        if (this.getHeadline() != null){
            return "/article/" + StringUtils.toNormalized(headline);
        } else {
            return null;
        }    
    }
}
