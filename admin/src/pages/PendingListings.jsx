import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import {
  Check, X, Building2, MapPin, BedDouble, Bath,
  Maximize, User, Mail, Clock, RefreshCw, Search,
} from "lucide-react";
import { toast } from "sonner";
import apiClient from "../services/apiClient";
import { cn, formatPrice, formatDate } from "../lib/utils";

// ── Reject Modal ──────────────────────────────────────────────────────────────

const RejectModal = ({ listing, onClose, onConfirm, loading }) => {
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reason.trim()) {
      toast.error("Please provide a rejection reason.");
      return;
    }
    onConfirm(reason.trim());
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="relative bg-white rounded-2xl border border-[#E6E0DA] shadow-2xl w-full max-w-md p-6 z-10"
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.2 }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <X className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-[#221410] text-base leading-tight">Reject Listing</h3>
                <p className="text-xs text-[#6B7280] mt-0.5 leading-snug max-w-[240px] truncate">
                  {listing.title}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-[#9CA3AF] hover:text-[#374151] transition-colors p-1 rounded-lg hover:bg-[#F3F4F6]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-1.5">
                Rejection Reason <span className="text-red-500">*</span>
              </label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={4}
                placeholder="e.g. Missing price details, unclear photographs, prohibited content..."
                className="w-full border border-[#E6E0DA] rounded-lg px-3 py-2.5 text-sm text-[#221410] focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400 resize-none"
                autoFocus
              />
              <p className="text-xs text-[#9CA3AF] mt-1">
                This reason will be emailed to the listing owner.
              </p>
            </div>

            <div className="flex gap-3 justify-end pt-1">
              <button
                type="button"
                onClick={onClose}
                disabled={loading}
                className="px-4 py-2 text-sm font-medium text-[#374151] border border-[#E6E0DA] rounded-lg hover:bg-[#F9F9F9] transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading || !reason.trim()}
                className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading && (
                  <motion.span
                    className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.75, ease: "linear" }}
                  />
                )}
                Reject Listing
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

RejectModal.propTypes = {
  listing: PropTypes.shape({ title: PropTypes.string }).isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
  
// ── Listing Card ──────────────────────────────────────────────────────────────
const ListingCard = ({ listing, onApprove, onReject, actionLoading }) => {

  const images = listing.image || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const submitter = listing.postedBy;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      className="bg-white border border-[#E6D5C3] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex flex-col sm:flex-row">

        {/* 🔥 IMAGE SECTION */}
        <div className="sm:w-60 flex-shrink-0 bg-[#F5F1E8] p-2">

          {/* Main Image */}
          <div className="relative">
            <img
              src={images[currentIndex]}
              className="w-full h-40 object-cover rounded-xl cursor-pointer"
              onClick={() => setShowModal(true)}
            />

            {/* Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setCurrentIndex((prev) =>
                      prev === 0 ? images.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded"
                >
                  ‹
                </button>

                <button
                  onClick={() =>
                    setCurrentIndex((prev) => (prev + 1) % images.length)
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-2 mt-2">
            {images.slice(0, 4).map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setCurrentIndex(i)}
                className={`h-16 w-full object-cover rounded-lg cursor-pointer border ${
                  i === currentIndex ? "border-[#C9A96E]" : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* 🔥 CONTENT (same as before) */}
        <div className="flex-1 p-5 flex flex-col gap-3">

          <div className="flex justify-between">
            <h3 className="font-semibold text-[#221410]">
              {listing.title}
            </h3>
          </div>

          <p className="text-sm text-[#6B7280] flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#C9A96E]" />
            {listing.location}
          </p>

          <div className="flex gap-4 text-sm">
            <span className="text-[#C9A96E] font-bold">
              {formatPrice(listing.price)}
            </span>
            <span>{listing.beds} bed</span>
            <span>{listing.baths} bath</span>
            <span>{listing.sqft} sqft</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-auto">
            <button
              onClick={() => onApprove(listing._id)}
              className="flex-1 bg-green-600 text-white py-2 rounded-lg"
            >
              Approve
            </button>
            <button
              onClick={() => onReject(listing)}
              className="flex-1 bg-red-600 text-white py-2 rounded-lg"
            >
              Reject
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 FULLSCREEN MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

          {/* Close */}
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            ✕
          </button>

          {/* Image */}
          <img
            src={images[currentIndex]}
            className="max-h-[90%] max-w-[90%] rounded-lg"
          />

          {/* Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1
                  )
                }
                className="absolute left-5 text-white text-3xl"
              >
                ‹
              </button>

              <button
                onClick={() =>
                  setCurrentIndex((prev) => (prev + 1) % images.length)
                }
                className="absolute right-5 text-white text-3xl"
              >
                ›
              </button>
            </>
          )}
        </div>
      )}
    </motion.div>
  );
};

ListingCard.propTypes = {
  listing: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string,
    location: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.arrayOf(PropTypes.string),
    beds: PropTypes.number,
    baths: PropTypes.number,
    sqft: PropTypes.number,
    type: PropTypes.string,
    availability: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.string,
    postedBy: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
    }),
  }).isRequired,
  onApprove: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired,
  actionLoading: PropTypes.string,
};

ListingCard.defaultProps = {
  actionLoading: null,
};

// ── Main Page ─────────────────────────────────────────────────────────────────

const PendingListings = () => {
  
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(null); // "approve-<id>" | "reject-<id>"
  const [rejectTarget, setRejectTarget] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchPending = useCallback(async () => {
    setLoading(true);
    try {
      const res = await apiClient.get('/api/admin/properties/pending');
      const data = res.data.listings ?? res.data.properties ?? res.data ?? [];
      setListings(Array.isArray(data) ? data : []);
    } catch (err) {
      const msg = err.response?.data?.message || "Failed to fetch pending listings.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPending();
  }, [fetchPending]);

  const handleApprove = async (id) => {
    setActionLoading(`approve-${id}`);
    try {
      await apiClient.put(`/api/admin/properties/${id}/approve`, {});
      setListings((prev) => prev.filter((l) => l._id !== id));
      toast.success("Listing approved and is now live!");
    } catch (err) {
      const msg = err.response?.data?.message || "Failed to approve listing.";
      toast.error(msg);
    } finally {
      setActionLoading(null);
    }
  };

  const handleRejectConfirm = async (reason) => {
    if (!rejectTarget) return;
    const id = rejectTarget._id;
    setActionLoading(`reject-${id}`);
    try {
      await apiClient.put(`/api/admin/properties/${id}/reject`, { reason });
      setListings((prev) => prev.filter((l) => l._id !== id));
      toast.success("Listing rejected. The owner has been notified by email.");
    } catch (err) {
      const msg = err.response?.data?.message || "Failed to reject listing.";
      toast.error(msg);
    } finally {
      setActionLoading(null);
      setRejectTarget(null);
    }
  };

  // Filter by search query
  const filtered = listings.filter((l) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      l.title?.toLowerCase().includes(q) ||
      l.location?.toLowerCase().includes(q) ||
      l.postedBy?.name?.toLowerCase().includes(q) ||
      l.postedBy?.email?.toLowerCase().includes(q)
    );
  });

  // ── Skeleton ──

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="h-8 w-56 bg-[#E6E0DA] rounded animate-pulse mb-8" />
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white border border-[#E6D5C3] rounded-2xl overflow-hidden h-44 animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-[#221410]">Review Queue</h1>
            {listings.length > 0 && (
              <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full border border-amber-200">
                {listings.length} pending
              </span>
            )}
          </div>
          <p className="text-sm text-[#6B7280] mt-1">
            Approve or reject user-submitted property listings.
          </p>
        </div>
        <button
          onClick={fetchPending}
          disabled={loading}
          className="flex items-center gap-2 text-sm font-medium text-[#6B7280] border border-[#E6E0DA] px-4 py-2 rounded-xl hover:bg-[#F9F9F9] transition-colors self-start sm:self-auto"
        >
          <RefreshCw className="w-4 h-4" />
          Refresh
        </button>
      </div>

      {/* Search */}
      {listings.length > 0 && (
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, location or submitter..."
            className="w-full pl-10 pr-4 py-2.5 border border-[#E6E0DA] rounded-xl text-sm text-[#221410] bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/30 focus:border-[#C9A96E]"
          />
        </div>
      )}

      {/* Empty state */}
      {!loading && filtered.length === 0 && (
        <div className="text-center py-20">
          <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
            {searchQuery ? (
              <Search className="w-8 h-8 text-emerald-500" />
            ) : (
              <Check className="w-8 h-8 text-emerald-500" />
            )}
          </div>
          <h3 className="font-semibold text-[#221410] text-lg mb-1">
            {searchQuery ? "No results found" : "All clear!"}
          </h3>
          <p className="text-sm text-[#6B7280]">
            {searchQuery
              ? `No listings match "${searchQuery}". Try a different search.`
              : "No listings are waiting for review right now."}
          </p>
        </div>
      )}

      {/* Listing cards */}
      <AnimatePresence>
        <div className="space-y-5">
          {filtered.map((listing) => (
            <ListingCard
              key={listing._id}
              listing={listing}
              onApprove={handleApprove}
              onReject={setRejectTarget}
              actionLoading={actionLoading}
            />
          ))}
        </div>
      </AnimatePresence>

      {/* Reject Modal */}
      {rejectTarget && (
        <RejectModal
          listing={rejectTarget}
          onClose={() => setRejectTarget(null)}
          onConfirm={handleRejectConfirm}
          loading={actionLoading === `reject-${rejectTarget._id}`}
        />
      )}
    </div>
  );
};

export default PendingListings;
