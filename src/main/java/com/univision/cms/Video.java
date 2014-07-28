package com.psddev.brightspot;

import com.psddev.cms.db.*;
import com.psddev.cms.tool.*;
import com.psddev.dari.db.*;
import com.psddev.dari.util.*;
import java.util.*;

@Renderer.LayoutPath("/WEB-INF/common/page-container.jsp")
@Renderer.Path("/WEB-INF/model/video-object.jsp")
public class Video extends Content implements Directory.Item {

	@Required
    private String title;
    @Required
    private int providerId;
    private boolean autoplay;
    private ReferentialText description;
    private boolean isEpisode;
    @Required
    private String thumbnail;

    @ToolUi.Heading("Video Module")
    private VideoModule videoModule;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getProviderId() {
        return providerId;
    }

    public void setProviderId(int providerId) {
        this.providerId = providerId;
    }

    public boolean getAutoplay() {
        return autoplay;
    }

    public void setAutoplay(boolean autoplay) {
        this.autoplay = autoplay;
    }

    public ReferentialText getDescription() {
        return description;
    }

    public void setDescription(ReferentialText description) {
        this.description = description;
    }

    public boolean getIsEpisode() {
        return isEpisode;
    }

    public void setIsEpisode(boolean isEpisode) {
        this.isEpisode = isEpisode;
    }

    public VideoModule getVideoModule() {
        return videoModule;
    }

    public void setVideoModule(VideoModule videoModule) {
        this.videoModule = videoModule;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    @Override
    public String createPermalink(Site site) {

        if (this.getTitle() != null) {
            return "/video/" + StringUtils.toNormalized(title);
        } else {
            return null;
        }    
    }
}

