"use client"

import { Trash2, Edit2 } from "lucide-react"

interface Column {
  key: string
  label: string
  width?: string
}

interface TableComponentProps {
  columns: Column[]
  data: any[]
  onEdit?: (item: any) => void
  onDelete?: (item: any) => void
  onAddNew?: () => void
}

export function TableComponent({ columns, data, onEdit, onDelete, onAddNew }: TableComponentProps) {
  return (
    <div className="space-y-4">
      {onAddNew && (
        <button
          onClick={onAddNew}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
        >
          Tambah Baru
        </button>
      )}

      <div className="overflow-x-auto border border-border rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="bg-muted border-b border-border">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-4 py-3 text-left text-sm font-medium text-foreground"
                  style={{ width: col.width }}
                >
                  {col.label}
                </th>
              ))}
              {(onEdit || onDelete) && (
                <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Aksi</th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx} className="border-b border-border hover:bg-muted/50 transition-colors">
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3 text-sm text-foreground">
                    {item[col.key]}
                  </td>
                ))}
                {(onEdit || onDelete) && (
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center gap-2">
                      {onEdit && (
                        <button
                          onClick={() => onEdit(item)}
                          className="p-1 hover:bg-blue-100 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded transition-colors"
                        >
                          <Edit2 size={16} />
                        </button>
                      )}
                      {onDelete && (
                        <button
                          onClick={() => onDelete(item)}
                          className="p-1 hover:bg-red-100 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 rounded transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
