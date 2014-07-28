package com.psddev.brightspot;

import com.psddev.cms.db.*;
import com.psddev.cms.tool.*;
import com.psddev.dari.db.*;
import com.psddev.dari.util.*;
import java.util.*;


@Renderer.Path("/WEB-INF/module/videoModule.jsp")
public class VideoModule extends Content {

	@Required
    private String title;   

    @CollectionMinimum(1)
    private List<Video> videos;
    
    // Getters and Setters  
    public void setTitle(String title) {
        this.title = title;
    }
    
    public String getTitle() {
        return title;
    }

    public void setVideos(List<Video> videos) {
        this.videos = videos;
    }
    
    public List getVideos() {
        return videos;
    }
}

