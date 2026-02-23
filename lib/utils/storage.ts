const PROGRESS_KEY = 'deepend_progress';

export function getProgress(frameworkId: string): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(`${PROGRESS_KEY}_${frameworkId}`);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveProgress(frameworkId: string, completedIds: string[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(`${PROGRESS_KEY}_${frameworkId}`, JSON.stringify(completedIds));
  } catch {
    // localStorage unavailable
  }
}

export function resetProgress(frameworkId: string): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(`${PROGRESS_KEY}_${frameworkId}`);
  } catch {
    // localStorage unavailable
  }
}

export function getAllProgress(): Record<string, string[]> {
  if (typeof window === 'undefined') return {};
  const result: Record<string, string[]> = {};
  const frameworkIds = ['framework-1', 'framework-2', 'framework-integration'];
  for (const id of frameworkIds) {
    result[id] = getProgress(id);
  }
  return result;
}
