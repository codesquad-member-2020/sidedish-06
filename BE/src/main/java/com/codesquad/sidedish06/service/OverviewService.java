package com.codesquad.sidedish06.service;

import java.io.IOException;
import java.net.URISyntaxException;

public interface OverviewService {
    public Object list(String menu) throws IOException, URISyntaxException;
}