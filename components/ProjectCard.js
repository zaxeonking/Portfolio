import Link from 'next/link';

export default function ProjectCard({ project }) {
  const date = project.createdAt
    ? new Date(project.createdAt).toISOString().slice(0, 10)
    : '0000-00-00';

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group relative block rounded-lg border border-line bg-panel/60 p-5 transition-colors hover:border-signal/50 hover:bg-panel"
    >
      {project.featured && (
        <span className="absolute right-4 top-4 rounded-full border border-amber/40 bg-amber/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber">
          featured
        </span>
      )}

      <div className="mb-3 flex items-center gap-2 font-mono text-xs text-muted">
        <span className="text-signal">#{project.id.slice(-6)}</span>
        <span>·</span>
        <span>{date}</span>
      </div>

      <h3 className="mb-2 font-display text-lg font-semibold text-fg group-hover:text-signal">
        {project.title}
      </h3>

      <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-line bg-ink px-2 py-0.5 font-mono text-[11px] text-signal"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
