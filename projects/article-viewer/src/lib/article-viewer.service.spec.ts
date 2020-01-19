import { TestBed } from '@angular/core/testing';

import { ArticleViewerService } from './article-viewer.service';

describe('ArticleViewerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleViewerService = TestBed.get(ArticleViewerService);
    expect(service).toBeTruthy();
  });
});
