"use client";
import { Expand } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProjectVisual } from "@/components/project-visual";
import type { Project } from "@/data/projects";
export function DashboardGallery({ project }: { project: Project }) {
  return (
    <div className="gallery">
      {project.screenshots.length ? (
        project.screenshots.map((shot) => (
          <Dialog key={shot.src}>
            <DialogTrigger asChild>
              <button className="gallery-trigger">
                <img src={shot.src} alt={shot.alt} />
                <span>
                  <Expand size={16} />
                  Open larger
                </span>
              </button>
            </DialogTrigger>
            <DialogContent className="gallery-dialog">
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription>{shot.alt}</DialogDescription>
              <img src={shot.src} alt={shot.alt} />
            </DialogContent>
          </Dialog>
        ))
      ) : (
        <Dialog>
          <DialogTrigger asChild>
            <button
              className="gallery-trigger"
              aria-label="Enlarge illustrative dashboard concept"
            >
              <ProjectVisual kind={project.visual} />
              <span>
                <Expand size={16} />
                Enlarge layout concept
              </span>
            </button>
          </DialogTrigger>
          <DialogContent className="gallery-dialog">
            <DialogTitle>{project.title}</DialogTitle>
            <DialogDescription>
              Illustrative layout only. Verified dashboard screenshots and
              findings have not yet been supplied.
            </DialogDescription>
            <ProjectVisual kind={project.visual} />
          </DialogContent>
        </Dialog>
      )}
      {!project.screenshots.length && (
        <p className="evidence-note">
          Layout concept only · Actual dashboard screenshots will be added with
          verified results.
        </p>
      )}
    </div>
  );
}
